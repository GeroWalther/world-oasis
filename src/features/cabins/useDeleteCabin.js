import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { deleteCabin as deleteCabinApi } from '../../services/apiCabins';

export function useDeleteCabin() {
  const queryClient = useQueryClient();
  // this returned mutate function we can call from inside our component.
  const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
    mutationFn: deleteCabinApi, // equal to:  (id) => deleteCabins(id),

    // this will run after mutate is successful. here we invalidate the query to refetch and update the ui. For that we need to call invalidate query on the queryClient which is returned by the hook useQueryClient. Needs queryKey for that. gets access to returned data from mutationFn in the argument

    onSuccess: () => {
      toast.success('Cabin successfully deleted.');
      queryClient.invalidateQueries({
        queryKey: ['cabins'],
      });
    },
    // gets access to thrown error in the mutationFn, in this case deleteCabins
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteCabin };
}
